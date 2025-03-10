import React, {Component} from 'react';
import styled from 'styled-components';
import Link from '../components/Link/Link';
import List from '../components/List/List';
//import './Profile.css';

const ProfileWrapper = styled.div`
    width: 50%;
    margin: 10px auto;
    `;

const Avatar = styled.img`
    width: 150px;
    `;

class Profile extends Component{
    constructor(){
        super();
        this.state = {
            data:{},
            repositories: [],
            loading: true,
            error: "",
        }
    }
    async componentDidMount(){
    try{
        // octocat
        const profile = await fetch('https://api.github.com/users/sunny0402');
        const profileJSON = await profile.json();
        if (profileJSON){
            const repositories = await fetch(profileJSON.repos_url);
            const repositoriesJSON = await repositories.json();

            this.setState({
                data:profileJSON,
                repositories: repositoriesJSON,
                loading:false
            });
        }
    }
    catch(error){
        this.setState(
            {
                loading: false,
                error: error.message                
            });
    }
    }   
    render(){
        const {data,loading,repositories, error} = this.state;
        // voteable = (age < 18) ? "Too young":"Old enough";
        if (loading || error){
        return <div>{loading ? 'Loading...': error}</div>; 
        }
        const items = [
            {label:'html_url', value: <link url = {data.html_url} title = 'Github URL' />},
            { label: 'repos_url', value: data.repos_url },
            { label: 'name', value: data.name},
            { label: 'company', value: data.company },
            { label: 'location', value: data.location },
            { label: 'email', value: data.email },
            { label: 'bio', value: data.bio }
        ]
        const projects = repositories.map(repository =>({
            label: repository.name,
            value: <Link url = {repository.html_url} title = 'Github URL'/>
        }));
        
        return(
           // <div className = 'Profile-container'>
           <ProfileWrapper>
                {/* <img className = 'Profile-avatar' src = {data.avatar_url} alt = 'avatar' />  */}
                <Avatar src={data.avatar_url} alt = 'avatar' />
                {/* <List items = {items} /> */}

                {/* send a prop called title to the List component */}
                <List title = 'Profile' items = {items}/>
                <List title = 'Projects' items = {projects} />
            </ProfileWrapper>     
           // </div>
        );
    }
}
export default Profile;
