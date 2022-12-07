const dataStructure = [{
    title: "Group 1",
    children: [
        {
            title: "Sub Group",
            children: [
                {
                    title: "Leaf item 1",
                    amount: 13
                },
                {
                    title: "Leaf item 2",
                    amount: 24
                }
            ]
        },
        {
            title: "Sub group 2",
            amount: 6,
            children: [
                {
                    title: "Leaf item 3",
                    amount: 5,
                    children: [
                        {
                            title: "Leaf item 3 child 1",
                            amount: 9
                        },
                        {
                            title: "Leaf item 3 child 1"
                        }
                    ]
                }
            ]
        },
        {
            title: "Leaf item 4",
            amount: 32
        }
    ]
}]

function calculate(data) {
    // loop through all the items in the data structure recursively.
    // if an element has a "amount" value, add it to the count.
    // the function must return you the count of all the amounts.
    // you may only use this function to process the data.
    // the expected result is 89
}

const count = calculate(dataStructure);
console.log(count);