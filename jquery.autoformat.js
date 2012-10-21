/**
* Add an "auto-format" class name to each input field 
* where auto-format is desired
**/

(function ($, document, window, undefined) {
    "use strict";

    Number.prototype.thousands = function () {
        var dp = (this.indexOf(".") + 1) ? "." : "";
        var chunks = this.replace(/[^\d\.]/g, "").split(".");
        return chunks[0].split("").reduce(groupThousands, []).join("").concat(dp, (chunks[1] || ""));
        function groupThousands(prev, digit, idx, digits) {
            if (!((digits.length - idx) % 3) && idx) prev.push(",");
            prev.push(digit);
            return prev;
        }
    };
    String.prototype.thousands = Number.prototype.thousands;

    $(document).ready(function () {
        $("input.auto-format").on("input", autoFormat);
    });

    function autoFormat() {
        var temp = $(this).val().thousands();
        $(this).val(temp);
    }

})(jQuery, document, window);