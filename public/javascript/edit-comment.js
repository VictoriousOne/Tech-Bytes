

async function commentFormHandler(event) {
    event.preventDefault();

    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
    const comment_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (comment_text) {
        const response = await fetch(`/api/comments/${comment_id}`, {
            method: 'PUT',
            body: JSON.stringify({
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

async function deleteFormHandler(event) {
    event.preventDefault();

    const response = await fetch(`/api/comments/${comment_id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);