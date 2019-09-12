import React from 'react'

export default () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2>Our main project</h2>
                    <p>JVM based game engine named GdxMachine. The game engine is based on popular framework for building JVM based games libGDX. The goal behind GdxMachine is to be open source, community driven, beginner friendly, feature rich game engine. <br/> <b>Currently in development phase</b></p>
                    <a href="https://github.com/disgraded/quariq"><button type="button" className="btn btn-primary">Download</button></a>
                    {/* <button type="button" class="btn btn-secondary">Dev Logs</button> */}
                </div>
                <div className="col-md-6">
                    <div className="quariq-layers-illustration">
                        <img alt="QuariQ Layers" src="/img/quariq-layer.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}