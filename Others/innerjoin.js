list1 = [
    { id: 1, email: "angel@gmail.com" },
    { id: 2, email: "jose@gmail.com" },
];
// map[key] = idx

list2 = [
    { id: 1, email: "angelinux@gmail.com", name: "Angel" },
    { id: 2, name: "Jose" },
    { id: 3, name: "Walter" },
];

function myjoin(leftArray, rightArray, key) {
    const resList = [];
    for (let i = 0; i < leftArray.length; i++) {
        for (let j = 0; j < rightArray.length; j++) {
            if (leftArray[i][key] === rightArray[j][key]) {
                const mergedObj = { ...leftArray[i], ...rightArray[j] };
                resList.push(mergedObj);
                console.log("merged");
                break;
            }
        }
    }
    return resList;
}

const key = "name";
console.log(list2[0][key]);
const res = myjoin(list1, list2, "id");
for (let i = 0; i < res.length; i++) {
    console.log(res[i]);
}
