$(document).ready(function () {
    $('#movie-form').on('submit', function (e) {
        e.preventDefault();

        let title = $('#title-input').val();
        let rating = $('#rating-input').val();

        if (title.length < 2) {
            alert('Movie must be at least 2 characters');
            $('#title-input').val('');
            $('#rating-input').val('');
            return;
        }
        let newMovieRow = $('<tr>');
        let titleColumn = $('<td>').text(title);
        let ratingColumn = $('<td>').text(rating);
        let deleteColumn = $('<td>');
        let removeBtn = $('<button>').text('Remove').addClass('remove-btn');
        deleteColumn.append(removeBtn);
        newMovieRow.append(titleColumn, ratingColumn, deleteColumn);
        $('#results tbody').append(newMovieRow);


        $('#title-input').val('');
        $('#rating-input').val('');

    });

    $('#results').on('click', '.remove-btn', function (e) {
        e.preventDefault();
        $(this).closest('tr').remove();
    });

    $('#sort-title-asc').on('click', function (e) {
        e.preventDefault();
        sortTableAsc('title', 'asc');
    });
    $('#sort-rating-asc').on('click', function (e) {
        e.preventDefault();
        sortTableAsc('rating', 'asc');
    });
    $('#sort-title-desc').on('click', function (e) {
        e.preventDefault();
        sortTableAsc('title', 'desc');
    });
    $('#sort-rating-desc').on('click', function (e) {
        e.preventDefault();
        sortTableAsc('rating', 'desc');
    });

    function sortTableAsc(column, order) {
        let tbody = $('#results tbody');
        let rows = tbody.find('tr').get();
        console.log(rows);

        rows.sort(function (a, b) {
            let aVal = $(a).find('td').eq(column === 'title' ? 0 : 1).text();
            let bVal = $(b).find('td').eq(column === 'title' ? 0 : 1).text();
            console.log('aVal:', aVal, 'bVal:', bVal);

            if (column === 'rating') {
                aVal = parseFloat(aVal);
                bVal = parseFloat(bVal);
            }
            if (order === 'asc') {
                return aVal > bVal ? 1 : -1;
            } else {
                return aVal < bVal ? 1 : -1;
            }
        });
        tbody.empty().append(rows);
    };

    function sortTableDesc(column, order) {
        let tbody = $('#results tbody');
        let rows = tbody.find('tr').get();
        console.log(rows);

        rows.sort(function (a, b) {
            let aVal = $(a).find('td').eq(column === 'title' ? 0 : 1).text();
            let bVal = $(b).find('td').eq(column === 'title' ? 0 : 1).text();
            console.log('aVal:', aVal, 'bVal:', bVal);

            if (column === 'rating') {
                aVal = parseFloat(aVal);
                bVal = parseFloat(bVal);
            }
            if (order === 'desc') {
                return aVal < bVal ? 1 : -1;
            } else {
                return aVal > bVal ? 1 : -1;
            }
        });
        tbody.empty().append(rows);
    };




})