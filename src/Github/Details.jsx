import React from 'react'

function Details({state}) {
  
  return (
    <ul class="list-group">
      <li class="list-group-item">{state!=null?state.name:""}</li>
      <li class="list-group-item">{state!=null?state.login:""}</li>
      <li class="list-group-item">{state!=null?state.organizations_url:""}</li>
      <li class="list-group-item">{state!=null?state.public_repos:""}</li>
      <li class="list-group-item">{state!=null?state.type:""}</li>
      <li class="list-group-item">{state!=null?state.updated_at:""}</li>
      <li class="list-group-item">{state!=null?state.url:""}</li>
      <li class="list-group-item">{state!=null?state.user_view_type:""}</li>
      <li class="list-group-item">{state!=null?state.created_at:""}</li>
      <li class="list-group-item">{state!=null?state.followers_url:""}</li>
    </ul>
  )
}

export default Details