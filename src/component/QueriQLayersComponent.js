import React from 'react'

export default () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2>Our main project</h2>
                    <p>Game engine based on JVM platform with support for Android, Windows and Linux operating systems. Extensible and friendly for any type of developer. QuariQ is writen in Kotlin but our plan is to support JavaScript and Lua as a scripting languages. <br/> <b>Currently in development phase</b></p>
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