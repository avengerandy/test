let luaInterpreter = {
    runCode: function(code, returnVar) {
        let result = 0;
        let errorMsg = "";
        try {
            result = fengari.load(code + "\nreturn " + returnVar)();
        } catch (error) {
            errorMsg = error;
        }
        return {
            result: result || 0,
            error: errorMsg
        }
    }
}