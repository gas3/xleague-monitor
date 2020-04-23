(function ($) {
    'use strict';

    // console.log('custom-firebase.js');

    $(document).ready(function () {
        let users = [];
        let devices = [];

        const showFirestoreDatabase = () => {
            // console.log('Custom Firebase');
            // console.log(firebase);

            // Get a reference to the database service
            var database = firebase.database();

            // This is reference to tha database, to fetch data from database use below code:

            var usersRef = database.ref('v2/users');
            
            usersRef.on('value', function (snapshot) {
                users = snapshot.val();
                
                displayTable();
            });

            var devicesRef = database.ref('v2/devices');
            devicesRef.on('value', function (snapshot) {
                devices = snapshot.val();

                displayTable();

                // debugger
            });

        }

        const displayTable = () => {
            // console.log('displayTable()')
            // console.log(users);
            // console.log(devices);

            if (users.length == 0 || devices.length == 0)
                return;

            let html = '<table>';
                html += '<tr>';
                html += '<th></th>';
                html += '<th></th>';
                html += '<th>Screen Name</th>';
                html += '<th>Player ID</th>';
                html += '<th>Platform</th>';
                html += '<th>Date First Appeared</th>';
                html += '<th>Qty of Games Played</th>';
                html += '<th>Qty of Referrals</th>';
                html += '</tr>';

                jQuery.each(users, function (key, value) {
                    // You can put condition to filter your value
                    // and it won't show on the frontend

                    // const date = timeConverter(value.Timestamp);
                    // console.log(date);

                    // debugger
                    
                    html += '<tr>';
                    html += '<td><img src="' + value.FlagURL + '" width="50" height="50" /></td>';
                    html += '<td><img src="' + value.AvatarURL + '" width="50" height="50" /></td>';
                    html += '<td>' + value.DisplayName + '</td>';
                    html += '<td>' + key + '</td>';
                    html += '<td>' + 'Android/iPhone' + '</td>';
                    html += '<td>' + moment(value.Timestamp).format('MM-DD HH:mm:ss') + '</td>';
                    html += '<td>' + 0 + '</td>';
                    html += '<td>' + 0 + '</td>';
                    html += '</tr>';


                })

                const firestoreEl = jQuery('#custom-firebase');
                html += '</table>';
                firestoreEl.html(html)
        }

        function timeConverter(UNIX_timestamp){
            var a = new Date(UNIX_timestamp * 1000);
            var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            var year = a.getFullYear();
            var month = months[a.getMonth()];
            var date = a.getDate();
            var hour = a.getHours();
            var min = a.getMinutes();
            var sec = a.getSeconds();
            var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
            return time;
          }

        showFirestoreDatabase()
    })
})(jQuery)