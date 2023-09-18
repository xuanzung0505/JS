//EX1
(function EX1(){
    function module(tag){
        var x = "x"
        var y = [1,2,3]

        function printX(){
            console.log(x)
        }
        function printY(){
            console.log(y.join("!"))
        }
        function printTag(){
            console.log(tag)
        }
        function printTagUpperCase(){
            console.log(tag.toUpperCase())
        }
        function changePrintTag(){
            api.printTag = printTagUpperCase
        }
        function printPrintTag(){
            console.log(api.printTag)
            console.log("printTagUpperCase:"+(api.printTag==printTagUpperCase))
            console.log("printTag:"+(api.printTag==printTag))

        }
        var api = {
            printX: printX,
            printY: printY,
            printTag: printTag,
            changePrintTag: changePrintTag,
            printPrintTag: printPrintTag
        }

        return api
    }

    var moduleInstance = module("a")
    moduleInstance.printTag()
    moduleInstance.printPrintTag()
    moduleInstance.changePrintTag()
    moduleInstance.printTag()
    moduleInstance.printPrintTag()

    var moduleInstance2 = module("2")
    moduleInstance2.printTag()
}());