class APIFeaures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    filter() {
        let queryObj = { ...this.queryString };
        let excludedFields = ['page', 'limit', 'sort', 'fields'];
        excludedFields.forEach(element => { delete queryObj[element]; });

        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt|ne|nin)\b/g, match => `$${match}`);
        queryObj = JSON.parse(queryStr);
        this.query = this.query.find(queryObj);

        return this;
    }

    sort() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' ');
            console.log(sortBy);
            this.query = this.query.sort(sortBy);
        }

        return this;
    }

    paginate() {
        const limit = this.queryString.limit * 1 || 100;
        console.log('limit: ', limit);
        const page = this.queryString.page * 1 || 1;
        console.log('page: ', page);
        const skip = (page - 1) * limit;
        console.log('skip: ', skip);
        this.query = this.query.skip(skip).limit(limit);

        return this;
    }

    limitFields() {
        if (this.queryString.fields) {
            const fields = this.queryString.fields.split(',').join(' ');
            console.log(fields);
            this.query = this.query.select(fields);
        }
        return this;
    }
}

module.exports = APIFeaures;