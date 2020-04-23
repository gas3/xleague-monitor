(function ($) {
    'use strict';

    // console.log('custom-firebase.js');

    $(document).ready(function () {
        let users = {};
        let devices = {};
        let games = {};

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
            });

            var gamesRef = database.ref('v2/games');
            gamesRef.on('value', function (snapshot) {
                games = snapshot.val();

                displayTable();
            });

        }

        const displayTable = () => {
            // users
            if (Object.keys(users).length == 0)
                return;

            const platform = {};
            const qty_games = {};

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

            // devices
            if (Object.keys(devices).length > 0) {
                for (const key in devices) {
                    const device = devices[key];

                    platform[device.PlayerID] = device.DevicePlatform || '';
                    platform[device.PlayerID] = platform[device.PlayerID].replace('IPhonePlayer', 'iPhone');
                    qty_games[device.PlayerID] = qty_games[device.PlayerID] ? qty_games[device.PlayerID] + 1 : 1;
                }
            }

            // console.log(qty_games);
            // console.log(platform);
            // debugger;

            // users
            for (const key in users) {
                const user = users[key];

                html += '<tr>';
                html += '<td><img src="' + user.FlagURL + '" width="50" height="50" /></td>';
                html += '<td><img src="' + user.AvatarURL + '" width="50" height="50" /></td>';
                html += '<td>' + user.DisplayName + '</td>';
                html += '<td>' + key + '</td>';
                html += '<td>' + (platform[key] || '') + '</td>';
                html += '<td>' + moment(user.Timestamp).format('MM-DD HH:mm:ss') + '</td>';
                html += '<td>' + (qty_games[key] || 0) + '</td>';
                html += '<td>' + 0 + '</td>';
                html += '</tr>';


            }


            // display
            const firestoreEl = jQuery('#custom-firebase');
            html += '</table>';
            firestoreEl.html(html)
        }

        showFirestoreDatabase()
    })
})(jQuery)