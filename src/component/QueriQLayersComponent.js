import React from 'react'

export default () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2>QuariQ</h2>
                    <p>Game engine based on JVM platform with support for Android, Windows & Linux operating systems. Extensible and friendly for any type of developer. QuariQ is writen in Kotlin but our plan is to support JavaScript & Lua as a scripting languages. <br/> <b>Alpha release [v1.0.0]: 01.01.2020</b><br/> <b>Latest release [N/A]</b></p>
                    <button type="button" class="btn btn-primary">Download</button>
                    <button type="button" class="btn btn-secondary">Docs</button>
                    <button type="button" class="btn btn-secondary">Dev Log</button>
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