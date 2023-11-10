import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import LatestCharts from "../../features/leads";
import LatestNews from "../../features/user/components/LatestNews";
import './LatestCharts.css';

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Latest Charts" }));
  }, []);

  return (
    <div className="container">
      <LatestCharts />
      <LatestNews className="LatestNews" />
    </div>
  );
}

export default InternalPage;
