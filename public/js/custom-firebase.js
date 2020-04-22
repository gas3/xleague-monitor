(function ($) {
    'use strict';

    // console.log('custom-firebase.js');
    
    $(document).ready(function () {
        const showFirestoreDatabase = () => {
            // console.log('Custom Firebase');
            // console.log(firebase);


            const firestoreEl = jQuery('#custom-firebase');


            // Get a reference to the database service
            var database = firebase.database();

            // This is reference to tha database, to fetch data from database use below code:

            var starCountRef = firebase.database().ref('v2/users');
            // Add ref of child if any
            starCountRef.on('value', function (snapshot) {
                const users = snapshot.val();
                console.log(users);

                let html = '<table>';
                jQuery.each(users, function (key, value) {
                    // You can put condition to filter your value
                    // and it won't show on the frontend

                    html += '<tr>';
                    html += '<td><img src="' + value.AvatarURL + '" width="50" height="50" /></td>';
                    html += '<td>' + value.DisplayName + '</td>';
                    html += '<td><img src="' + value.FlagURL + '" width="50" height="50" /></td>';
                    html += '</tr>';


                })
                html += '</table>';
                firestoreEl.append(html)
            });

        }

        showFirestoreDatabase()
    })
})(jQuery)