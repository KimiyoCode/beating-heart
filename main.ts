let haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(24)
basic.forever(function () {
    haloDisplay.setColor(kitronik_halo_hd.colors(ZipLedColors.Red))
})
