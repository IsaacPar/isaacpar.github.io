var me = document.getElementById("me")

me.addEventListener('click', () => {
    mebox = new WinBox({
        title: "About Me",
        background: "#0000bd",
        width: "400px",
        height: "400px",
        top: 50,
        bottom: 1,
        left: 50,
        right: 50
    })
})