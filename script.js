document.addEventListener('DOMContentLoaded', () => {
    const xdeWindow = document.getElementById('xdeWindow');
    const btnMinimize = document.getElementById('btnMinimize');
    const btnMaximize = document.getElementById('btnMaximize');
    const btnClose = document.getElementById('btnClose');
    const kickerClock = document.getElementById('kickerClock');

    // 1. Maximizar y Activar FullScreen Real en el navegador
    btnMaximize.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            xdeWindow.requestFullscreen().catch(err => {
                alert(`Error al intentar poner pantalla completa: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    });

    // 2. Minimizar ventana (Efecto visual temporal)
    btnMinimize.addEventListener('click', () => {
        xdeWindow.classList.add('minimized');
        setTimeout(() => {
            alert("Minimizaste Xonsole. Presiona OK para restaurarla en el espacio de trabajo.");
            xdeWindow.classList.remove('minimized');
        }, 350);
    });

    // 3. Cerrar ventana (Simulación)
    btnClose.addEventListener('click', () => {
        if (confirm("¿Quieres cerrar la sesión actual de Xonsole?")) {
            xdeWindow.innerHTML = `
                <div style="padding: 50px 20px; text-align: center; font-family: monospace; color: #da4453;">
                    <h3 style="margin: 0 0 10px 0;">[PROCESS COMPLETED]</h3>
                    <p style="color: #7f8c8d; margin: 0;">Sesión terminada de forma segura.</p>
                </div>
            `;
            setTimeout(() => { location.reload(); }, 2500);
        }
    });

    // 4. Reloj dinámico para el Kicker Panel
    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        if(kickerClock) {
            kickerClock.textContent = `${hours}:${minutes}`;
        }
    }
    setInterval(updateClock, 1000);
    updateClock();
});
