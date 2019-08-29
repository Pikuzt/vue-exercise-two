const app = new Vue({
    el: "#app",
    data: {
        lists: []
    },
    methods: {
        addList() {
            const newList = {
                name: '',
                status: 'creating'
            }
            this.lists.push(newList)
        },
        saveList(list) {
            list.status = 'saved'
        },
        removeList(index){
            this.lists.splice(index,1)
        }
    },
})