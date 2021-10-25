import React, {useEffect, useState} from 'react';

import {posts, users} from "../../requests/api";

import {PageWrapper, StyledInput, PageContent, PageLoading, NotFounded, SearchWrapper} from "./Home.styles";
import Card from "../../conponents/card";
import Masonry from "react-masonry-css";

const Home = () => {
    const [value, setValue] = useState("");
    const [postsList, setPostsList] = useState([]);
    const [searchList, setSearchList] = useState([]);
    const [error, setErrors] = useState();
    const [isLoading, setLoading] = useState(false);
    const [searchTimeout, setSearchTimeout] = useState(false);

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    const searchHandler = (ev) => {
        setValue(ev.target.value);
        const search = ev.target.value;
        searchTimeout && clearTimeout(searchTimeout);
        setLoading(true);
        setSearchTimeout(setTimeout(() => {
            setSearchList(postsList.filter( post => post.user.name.substr(0, search.length).toLowerCase() === search.toLowerCase()))
            setLoading(false);
        }, 500));
    }

    useEffect( () => {
        setLoading(true);
        posts.fetchPosts().then( list => {

            users.fetchUsers().then( (users) => {
                list.map( post => {
                    post.user = users.find( findingUser => findingUser.id === post.userId);
                    return post;
                });
                setPostsList(list);
                setSearchList(list);
            })

        }).catch(err => setErrors(err)).finally(() => {
            setLoading(false);
        })
    }, []);

    const renderPostsList = searchList.map(post => (
        <Card key={post.id} item={post} />
    ));

    return (
        <PageWrapper>
            {error && <>{error}</>}
            <SearchWrapper>
                <StyledInput
                    value={value}
                    type="text"
                    onChanger={(ev) => searchHandler(ev)}
                    beforeIcon="search"
                />

            </SearchWrapper>
            {isLoading && <PageLoading>Поиск постов</PageLoading>}
            <PageContent>

                {searchList.length > 0
                    ? <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                        {renderPostsList}
                    </Masonry>
                    : !isLoading && <NotFounded> Ничего не найдено </NotFounded>}
            </PageContent>
        </PageWrapper>
    );
};

export default Home;