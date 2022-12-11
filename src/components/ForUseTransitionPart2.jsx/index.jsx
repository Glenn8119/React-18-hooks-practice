import { useTransition } from "react";
import { useEffect } from "react";
import { Suspense } from "react";
import { useState, lazy } from "react";
// import AdminData from "./AdminData";

const AdminData = lazy(() => {
  return import("./AdminData").then((module) => {
    return { default: module.AdminData };
  });
});

const ForUseTransitionPart2 = () => {
  const [isAdmin, setAdmin] = useState(false);
  const [isPending, startTransition] = useTransition();

  console.log("rerender");
  return (
    <>
      <div>
        <button
          onClick={() => {
            startTransition(() => {
              console.log("transition");
              setAdmin(() => {
                return !isAdmin;
              });
            });

            console.log("outside");
          }}
        >
          toggle Admin
        </button>
      </div>
      {isPending && "loading^^"}
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        {JSON.stringify(isAdmin)}
        {isAdmin ? <AdminData /> : "Not An Admin"}
      {/* </Suspense> */}
    </>
  );
};

export default ForUseTransitionPart2;
