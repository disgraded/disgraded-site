import React from 'react'

export default () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2>QuariQ</h2>
                    <p>Lightweight jvm based game engine for developing 2D games on Android, Widnows, Linux</p>
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