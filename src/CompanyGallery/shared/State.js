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
    return resultArray.length === 0 ? getNullCompany() : resultArray[0]
}

let getNullCompany = () => {
    return { id: null, active: null, name: null, address: null, city: null, state: null, zip: null, contacts:[], pictures:[] }
}

let getNullContact = () => {
    // This is kind of like a model class. Should we make a model class/object??
    // would there be any reuse in it? Interesting idea, explore later.
    return {active: null, first_name: null, last_name:null, email: null}
}

let getNullPicture = () => {
    return {file_name: null, url: null}
}

module.exports = {
    getCompanyById,
    getNullContact,
    getNullPicture,
    'companies': state.companies
}