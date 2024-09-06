import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({ totalItemsCount, pageSize, onPageChanged, currentPage, users, followingInProgress, follow, unfollow, ...props }) => {
    return (
        <div>
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalItemsCount}
                pageSize={pageSize}
            />
            <div>
                {
                    users.map(u => <User
                        user={u}
                        key={u.id}
                        followingInProgress={followingInProgress}
                        follow={follow}
                        unfollow={unfollow} />)
                }
            </div>
        </div>
    )
}

export default Users