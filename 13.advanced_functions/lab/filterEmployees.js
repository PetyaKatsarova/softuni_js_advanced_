function solve(data, criteria){
    let parsed = JSON.parse(data);
    criteria = criteria.split('-');
    const [criteriaKey, criteriaProp] = criteria;

    return parsed
          .filter(obj => obj[criteriaKey] === criteriaProp)
          .map((el, i) => `${i}. ${el['first_name']} ${el['last_name']} - ${el['email']}`)
          .join('\n');
}

console.log(solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
    }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
    },
    {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
    }]`,
    'gender-Female'));
//  0. Ardine Bassam - abassam0@cnn.com
// 1. Kizzee Jost - kjost1@forbes.com
