(() => {

    (() => {

        let done = false;
        let people;

        while (!done) {


            people = do_it();
            done = checkIt(people);

        }

        console.log(people);

    })();

    function checkIt(people) {

        console.log("checking...")

        let to_return = true;

        people.forEach((cur) => {

            if (cur.name === cur.picked || cur.dont_pick.includes(cur.picked)) {
                to_return = false;
            }

        });

        if(to_return===false){
            console.log('check is bad :(');
        }else if(to_return===true){
            console.log('check is good!');
        }

        return to_return;

    }

    function do_it() {

        const people = [
            {
                name: "Holly",
                dont_pick: [
                    "Casey"
                ]
            },
            {
                name: "Casey",
                dont_pick: [
                    "Holly"
                ]
            },
            {
                name: "Drew",
                dont_pick: [
                    "Julie"
                ]
            },
            {
                name: "Julie",
                dont_pick: [
                    "Drew"
                ]
            },
            {
                name: "Anna",
                dont_pick: []
            },
            {
                name: "Lacy",
                dont_pick: []
            },
        ];

        let number_arr = [];

        people.forEach((cur, i, arr) => {
            number_arr.push(i);
        });

        number_arr = shuffle(number_arr);

        number_arr.forEach((cur, i, arr) => {

            people[i].picked = people[cur].name;

        });

        return people;

    }

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

})();
