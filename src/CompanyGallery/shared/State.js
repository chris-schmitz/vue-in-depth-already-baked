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

module.exports = {
    getCompanyById,
    'companies': state.companies
}