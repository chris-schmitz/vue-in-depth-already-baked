import testData from './TestData'

let state = {
    companies: []
}

let setCompanies = (companies = []) => {
    state.companies = companies
}
// for test data
setCompanies(testData)

let getCompanyById = (id) => {
    let resultArray = state.companies.filter(company => Number(id) === company.id)
    return resultArray.length === 0 ? {} : resultArray[0]
}

let getNullContact = () => {
    // This is kind of like a model class. Should we make a model class/object??
    // would there be any reuse in it? Interesting idea, explore later.
    return {active: null, first_name: null, last_name:null, email: null}
}

module.exports = {
    getCompanyById,
    getNullContact,
    'companies': state.companies
}