function registerAMEHook() {
    try {
        app.encoder.bind("onEncoderJobComplete", function(jobID, outputFilePath) {
            try {
                var f = new File(outputFilePath);
                var folder = f.parent.fsName;

                if ($.os.indexOf("Windows") !== -1) {
                    system.callSystem('explorer.exe /select,"' + f.fsName + '"');
                } else {
                    system.callSystem('open "' + folder + '"');
                }
            } catch (err) {
                $.writeln("Meteorite AME Hook Error: " + err);
            }
        });
        alert("Meteorite Hook registered successfully!");
    } catch (e) {
        alert("Meteorite Hook Error: " + e);
    }
}
