// Lógica interactiva para la ventana estilo XDE Console
document.addEventListener('DOMContentLoaded', () => {
    const xdeWindow = document.getElementById('xdeWindow');
    const btnMinimize = document.getElementById('btnMinimize');
    const btnMaximize = document.getElementById('btnMaximize');
    const btnClose = document.getElementById('btnClose');

    // 1. Acción Minimizar (Desvanecimiento temporal con auto-restauración)
    btnMinimize.addEventListener('click', () => {
        xdeWindow.classList.add('minimized');
        console.log("Ventana minimizada.");
        
        setTimeout(() => {
            alert("Minimizaste la consola XDE. Presiona aceptar para restaurar.");
            xdeWindow.classList.remove('minimized');
        }, 350);
    });

    // 2. Acción Maximizar (Alternar tamaño completo en pantalla)
    btnMaximize.addEventListener('click', () => {
        xdeWindow.classList.toggle('maximized');
    });

    // 3. Acción Cerrar (Simulación de término de proceso)
    btnClose.addEventListener('click', () => {
        if (confirm("¿Seguro que deseas cerrar la sesión actual de XDE Console?")) {
            xdeWindow.innerHTML = `
                <div style="padding: 50px 20px; text-align: center; font-family: monospace; color: #da4453;">
                    <h3 style="margin: 0 0 10px 0;">[PROCESS COMPLETED]</h3>
                    <p style="color: #7f8c8d; margin: 0;">u0_github@localhost ha salido de la sesión correctamente.</p>
                </div>
            `;
            setTimeout(() => {
                location.reload();
            }, 3000);
        }
    });
});
