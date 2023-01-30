function dateTimeTab(content) {
    if (document.getElementById(content["origin"]).value.length === content["max"]) {
        document.getElementById(content["destination"]).focus();
    }
}