axios.get('https://ybiapi.fresh-app.com/api/demo_profile')
    .then(function (response) {
    console.log(response.data.images_list);
    document.getElementsByClassName('User-name')[0].textContent=response.data.name
    document.getElementsByClassName('profile-face')[0].src=response.data.photo
    document.getElementById('followers-number').textContent = response.data.followers
    document.getElementById('following-number').textContent = response.data.follow
    document.getElementById('likes').textContent = response.data.likes
    document.getElementsByClassName('img')[0].src = response.data.images_list[0]
    document.getElementsByClassName('img')[1].src = response.data.images_list[1]
    document.getElementsByClassName('img')[2].src = response.data.images_list[2]
    document.getElementsByClassName('img')[3].src = response.data.images_list[3]
})
