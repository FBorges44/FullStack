function executar(taskname, callback){
    console.log("teste da funcçaõ", taskname)
    callback()
    
}
function callback(){
    console.log("tarefa finalizada")
}
executar("teste", callback)