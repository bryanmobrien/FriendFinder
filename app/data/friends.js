// ===============================================================================
// DATA
// Below data will hold all of the friends.
// Initially we just set it equal to a "dummy" friened.
// ===============================================================================

const friends = [
    {
      "name":"Ahmed",
      "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      "scores":[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
    }, 
  
    {
      "name":"Jane",
      "photo":"https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      "scores":[3, 4, 5, 2, 1, 1, 5, 3, 4, 5]
    },
  
    {
      "name":"Nik",
      "photo":"https://images.unsplash.com/photo-1476814607969-0dfe98b9be5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      "scores":[2, 1, 1, 4, 4, 5, 2, 3, 1, 3]
    },
  
    {
      "name":"Brooke",
      "photo":"https://images.unsplash.com/photo-1492447216082-4726bf04d1d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      "scores":[5, 5, 5, 4, 4, 5, 2, 2, 4, 2]
    },
  
    {
      "name":"Paola",
      "photo":"https://images.unsplash.com/photo-1500832333538-837287aad2b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      "scores":[5, 2, 2, 4, 4, 4, 5, 5, 1, 5]
    },
  
    {
      "name":"Sally",
      "photo":"https://images.unsplash.com/photo-1524511858955-5d3bf3afd42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      "scores":[5, 1, 1, 4, 1, 1, 2, 4, 1, 3]
    },
  
    {
      "name":"Dane",
      "photo":"https://images.unsplash.com/photo-1545912453-3d32e20f72bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      "scores":[3, 3, 3, 4, 4, 5, 5, 4, 1, 5]
    },
  
    {
      "name":"Warren",
      "photo":"https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      "scores":[5, 2, 5, 4, 4, 5, 4, 3, 5, 3]
    },
  
    {
      "name":"Ayo",
      "photo":"https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      "scores":[5, 1, 4, 4, 4, 5, 1, 3, 1, 5]
    },
  
    {
      "name":"Chris",
      "photo":"https://images.unsplash.com/photo-1441622915984-05d13dfb3d8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      "scores":[4, 3, 1, 4, 4, 5, 5, 3, 2, 3]
    }
  
    ];
  
  
    
    // Note how we export the array. This makes it accessible to other files using require.
    module.exports = friends;