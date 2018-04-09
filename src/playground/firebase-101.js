database.ref().set({
    name: 'Tom',
    age: 33,
    stressLevel: 6,
    job: {
        title: 'Software',
        company: 'blabla'
    },
    location: {
        city: 'Buenos Aires',
        country: 'Argentina'
    }
}).then(() => {
    console.log('Data is saved!');
}).catch((e) => {
    console.log('This failed.', e);
})

// database.ref('age').set(30);
// database.ref('location/city').set('Beirut');

database.ref('attributes').set({
    heigth: 180,
    weight: 72
}).then(() => {
    console.log('Data is saved!');
}).catch((e) => {
    console.log('This failed.', e);
});

database
    .ref('attributes/heigth')
    .remove()
    .then(() => console.log('Data was removed!'))
    .catch(e => console.log('Did not remoe data', e));

database
    .ref('attributes/weight')
    .set(null)
    .then(() => console.log('Data was removed!'))
    .catch(e => console.log('Did not remoe data', e));

database
    .ref()
    .update({
        name: 'Castagnino',
        color: 'Verde',
        age: null
    });

database
    .ref()
    .update({
        name: 'Tomas',
        'location/city': 'Boston'
    });

database
    .ref()
    .update({
        stressLevel: 9,
        'job/company': 'Amablabli',
        'location/city': 'Seatle'
    });


database
    .ref()
    .once('value')
    .then(snapshot => console.log(snapshot.val()))
    .catch(e => console.log('Error fetching data'));



const onValueChange = database
                        .ref()
                        .on('value', snapshot => console.log(snapshot.val()));


    // database
    // .ref()
    // .off();

    database
    .ref()
    .off('value', onValueChange);

database.ref('expenses').push({
    description: 'Gas',
    note: 'Hello',
    amount: '100',
    createdAt: 0
});

database.ref('expenses').push({
    description: 'Coffe',
    note: 'Hello',
    amount: '100',
    createdAt: 0
});


database
    .ref('expenses')
    .on('value', snapshot => {
        const expenses = [];
        snapshot.forEach(element => {
            expenses.push({
                id: element.key,
                ...element.val()
            });
        });
        console.log(expenses);
    });

    
//Firebase events:
// child_removed
// child_changed
// child_added

