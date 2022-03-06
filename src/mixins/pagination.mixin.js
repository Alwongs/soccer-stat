import _ from 'lodash'

export default {
    data() {
        return {
            page: 1,
            pageSize: 15,
            pageCount: 0,
            chunkItems: [],
            items: []
        }
    },
    methods: {
        setupPagination(allItems) {
            this.chunkItems = _.chunk(allItems, this.pageSize)
            this.pageCount = _.size(this.chunkItems)
            return this.chunkItems[this.page - 1] || this.chunkItems[0]
        }
    }
}