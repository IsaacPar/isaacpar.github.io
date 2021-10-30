var me = document.getElementById("findcall")
var findme = document.getElementById("winbox1")

me.addEventListener('click', () => {
    mebox = new WinBox({
        title: "Find Me",
        width: "500px",
        height: "400px",
        top: 1,
        bottom: 1,
        left: 1,
        right: 1,
        mount: findme,
        onfocus: function() {
            this.setBackground("#0000bd")
        },
        onblur: function() {
            this.setBackground("#888")
        }
    })
})
