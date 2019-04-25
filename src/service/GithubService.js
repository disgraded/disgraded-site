class GithubService {

    getStats() {
        return new Promise((resolve) => {
            resolve({
                maintainers: 1,
                projects: 3,
                contributions: 106,
                issues: 22
            })
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