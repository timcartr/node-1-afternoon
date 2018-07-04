let messages = []
let id = 0

module.exports = {
    create:(req, res) => {
        const { text, time } = req.body;
        messages.push({ id, text,time })
        id++
        return res.status(200).send( messages )
    },
    read:(req, res) => {
        return res.status(200).send( messages )
    },
    update:(req, res) => {
        let { id } = req.params
        let { text } = req.body

        messages.map( (e) => {
            if(e.id === parseInt(id)){
                e.text = text
                return e
            }
        })
        res.status(200).send( messages )
    },
    delete:(req, res) => {
        let { id } = req.params
        let objIndex = null
        messages.forEach( (e,i) => {
            if( e.id == id ){
                objIndex = i
            }
        })
        messages.splice(objIndex,1)
        res.status(200).send( messages )
    }
}