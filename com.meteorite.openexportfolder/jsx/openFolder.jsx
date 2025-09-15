function openLastExportFolder() {
    try {
        var proj = app.project;
        if (proj) {
            var exportPath = proj.exportPath; // ممکنه در بعضی نسخه‌ها کار نکنه
            if (exportPath && File(exportPath).exists) {
                var f = new File(exportPath);
                var folder = f.parent.fsName;

                if ($.os.indexOf("Windows") !== -1) {
                    system.callSystem('explorer.exe /select,"' + f.fsName + '"');
                } else {
                    system.callSystem('open "' + folder + '"');
                }
            } else {
                alert("Meteorite: No export path found!");
            }
        }
    } catch (e) {
        alert("Meteorite Error: " + e);
    }
}
