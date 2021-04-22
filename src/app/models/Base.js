

const Base = {
    
    init({table}){
        if (!table) throw new Error("Invalid Params");
        
        this.table = table;
        return this.table;
    }
};

module.exports = Base;