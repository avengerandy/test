let json = {
    outputJson: function(checkFunction) {
        if (!checkFunction()) return;
        let exportName = document.getElementById("outputName").value || "output";
        let output = "data:text/json;charset=utf-8," + rootVM.getJson();
        let downloadAnchorNode = document.createElement("a");
        downloadAnchorNode.setAttribute("href", output);
        downloadAnchorNode.setAttribute("download", exportName + ".json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    },
    loadJson: function(file) {
        let reader = new FileReader();
        reader.onload = (function() {
            document.getElementById("outputName").value = file.name.substring(
                0, file.name.lastIndexOf(".")
            );
            rootVM.setJson(reader.result);
        });
        reader.readAsText(file);
    }
}