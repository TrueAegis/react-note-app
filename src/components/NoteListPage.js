import React from "react";
import NoteListItem from "./NoteListItem.js";

export default function NoteListPage() {
    function handleListItemClick(id) {
        if(id != null){
            alert(id + " clicked!");
        } else {
            console.log("Error: ID was not set");
        } 
    }

    return (
        //JSX
        <div className="list">
            <NoteListItem
                id="123"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra luctus est rutrum dapibus. Proin sit amet eleifend sapien. Proin eu nulla facilisis, ullamcorper magna eu, ullamcorper tellus. Ut faucibus nisl at lectus blandit vehicula a in lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec felis libero, dictum eget ante varius, feugiat malesuada sapien. Nunc sed lectus nec tellus tincidunt pellentesque ultrices at lectus. Mauris porttitor pharetra aliquam. Sed nisl enim, aliquet vitae sapien at, sagittis hendrerit metus. Nunc dictum gravida lectus, et egestas mi accumsan eu. Cras tempus, diam at placerat faucibus, nisi nulla rutrum lectus, nec iaculis eros lectus id orci. Etiam consequat ligula ex, et vulputate magna vulputate ac. Mauris malesuada cursus arcu et facilisis. Nam dapibus nulla erat, maximus gravida neque faucibus in. Quisque sollicitudin enim lorem, eu porttitor erat suscipit nec.
                Proin a eros ultricies, dapibus lacus nec, dignissim purus. Aenean eget orci sed nunc tempus tempor vel id tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse tincidunt, nunc a sollicitudin vestibulum, diam felis accumsan risus, sed efficitur libero nisi in leo. Duis non semper turpis. Donec vitae dictum nibh. Etiam dictum pulvinar pulvinar. Proin ultricies nisl eu leo aliquam semper. Suspendisse aliquam."
                dateTimeText="1/25/2020 5:00PM"
                onClick={handleListItemClick}
            />
        </div>
    );

}

