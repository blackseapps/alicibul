import React from "react";
import StackRoot from "./navigation/stackNavigation";
import Loading from "./view/Loading";
import {useSelector} from "react-redux";


const Route = () => {

    const {loading} = useSelector(state => state.master)
    const [isLoading, setLoading] = React.useState(false)

    React.useEffect(() => {
        setLoading(loading)
    }, [loading])

    return <>
        {isLoading && <Loading/>}
        <StackRoot/>
    </>;

};

export default Route;
