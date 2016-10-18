var arr = [
    {
        f_name: 'George',
        l_name: 'Washington',
        age: 279
    },
    {
        f_name: 'Abraham',
        l_name: 'Lincoln',
        age: 202
    },
    {
        f_name: 'Barack',
        l_name: 'Obama',
        age: 50
    }
];

$(function() {
    $('#headings th').click(function() {
        var id = $(this).attr('id');
        var asc = (!$(this).attr('asc')); // switch the order, true if not set
        
        // set asc="asc" when sorted in ascending order
        $('#headings th').each(function() {
            $(this).removeAttr('asc');
        });
        if (asc) $(this).attr('asc', 'asc');
        
        sortResults(id, asc);
    });
        
    showResults();
});

function sortResults(prop, asc) {
    arr = arr.sort(function(a, b) {
        if (asc) return (a[prop] > b[prop]);
        else return (b[prop] > a[prop]);
    });
    showResults();
}

function showResults () {
    var html = '';
    for (var e in arr) {
        html += '<tr>'
            +'<td>'+arr[e].f_name+'</td>'
            +'<td>'+arr[e].l_name+'</td>'
            +'<td>'+arr[e].age+'</td>'
        +'</tr>';
    }
    $('#results').html(html);
}