import Api from "../helper/Api"

class GithubService {

    api = Api.getInstance()
    url = "https://api.github.com"

    getStats() {
        let stats = {
            maintainers: 0,
            projects: 0,
            contributions: 0,
            issues: 0
        }
        let repos = []
        return this.api.fetch('GET', `${this.url}/orgs/disgraded/repos`).then((response) => {
            stats.projects = response['length']
            for(let repo of response) {
                stats.issues += repo['open_issues']
                repos.push(repo['name'])
            }
            return this.api.fetch('GET', `${this.url}/orgs/disgraded/members`)
        }).then((response) => {
            stats.maintainers = response['length']
            return this.getContributions(repos)
        }).then((contributions) => {
            stats.contributions = contributions
            return stats;
        }).catch((response) => {
            console.log(response)
        })
    }

    getContributions(repos) {
        let promises = [];
        for (let repoName of repos) {
            promises.push(
                this.api.fetch('GET', `${this.url}/repos/disgraded/${repoName}/contributors`)
            )
        }
        return Promise.all(promises).then((responses) => {
            let contributions = 0;
            for (let repo of responses) {
                for (let contributor of repo) {
                    contributions += contributor['contributions']
                }
            }
            return contributions
        })
    }

}

let instance = null
GithubService.getInstance = () => {
    if (instance === null) {
        instance = new GithubService()
    }
    return instance
}

export default GithubService;