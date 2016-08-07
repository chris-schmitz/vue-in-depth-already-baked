let companies = [
    {id: 1,name: 'XYZ company'},
    {id: 2,name: 'LOL inc'},
    {id: 3,name: 'OMG.co'},
]


let getCompanies = () => {
    if(companies.length > 0){
        return companies
    }
    return []
}

let getCompanyById = (id) => {
    return getCompanies().filter(company => Number(id) === company.id)
}

module.exports = {
    getCompanies,
    getCompanyById,
    companies
}

// exports.companies = companies