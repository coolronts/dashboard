import {
  Avatar,
  CalendarButton,
  Card,
  DropDown,
  Modal,
  Pagination,
  Table,
  Tabs,
  Tags,
} from "../../Components";
import { getScheduleApi, getUserApi } from "../../Utils/api";
import { useEffect, useState } from "react";

//TODO: Decouple it from the staff page
//TODO: Structured CSS class

const Staff: React.FC = () => {
  const options = ["Staff Working Hours", "Closed Dates", "Staff Members"];
  const [schedule, setSchedule] = useState<React.ReactNode[]>();
  const [showModal, setShowModal] = useState(false);
  const [usersData, setUsersData] = useState<React.ReactNode[]>();

  const handleModal = () => {
    setShowModal(!showModal);
  };
  if (!usersData) {
    getUserApi(5)
      .then((users) => {
        setUsersData(
          users.map((user) => (
            <div className="flex items-center text-gray-600">
              <Avatar img={user.avatar} radius={60} />
              <div className="ml-3">
                <p className="font-bold">{user.name}</p>
                <p className="text-gray-500">{user.email}</p>
              </div>
            </div>
          ))
        );
      })
      .catch((err) => console.log(err));
  }

  if (!schedule) {
    let data: any = [];
    getScheduleApi(10)
      .then((items) => {
        items.map((item: any, index: number) =>
          data.push(
            <div className="flex justify-around w-full font-sans px-4">
              <div
                className="flex items-center justify-left px-2 "
                style={{
                  width: "28%",
                }}
              >
                <Avatar img={item.avatar} radius={60} />
                <div className="ml-3 font-sans text-left ">
                  <p className="tracking-tighter text-xl">{item.name}</p>
                  <p className="text-gray-400 text-base font-semibold">
                    Availability: 36h
                  </p>
                </div>
              </div>

              <div className="flex justify-even items-center  w-full ">
                {item.schedule.map((schedule: any, index: number) => (
                  <div className="w-full text-lg flex flex-col justify-between items-center ">
                    {schedule.time.map((time: any, index: number) => (
                      <div
                        className="my-2 cursor-pointer"
                        onClick={() => handleModal()}
                      >
                        <Tags
                          color={
                            time.period.toLowerCase() === "closed"
                              ? "red"
                              : time.status.toLowerCase() === "pending"
                              ? "purple"
                              : "gray"
                          }
                          name={time.period}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )
        );
      })
      .then(() => setSchedule(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {}, [schedule, usersData, showModal]);
  return (
    <div>
      {showModal && (
        <Modal handleModal={handleModal}>
          <div>Hello</div>
        </Modal>
      )}
      {usersData && (
        <>
          <div className="pb-8 ">
            <Tabs options={options}>
              <p></p>
              <p> </p>
              <p> </p>
            </Tabs>
          </div>
          <div className="flex justify-between items-center text-gray-600 font-sans mt-6  ">
            <div className="w-1/3">
              <DropDown items={usersData} />
            </div>

            <div className="w-full flex justify-end items-center">
              <div className="w-1/6 pr-8">
                <Card type="secondary">
                  <div className="flex justify-center items-center h-full">
                    <p className="text-xl font-semibold">Today</p>
                  </div>
                </Card>
              </div>
              <div>
                <CalendarButton />
              </div>
            </div>
          </div>
          {schedule && (
            <div className="my-12">
              <Card>
                <Table
                  isHeader={true}
                  headings={[
                    "Staff",
                    " ",
                    "05 Sun",
                    "06 Mon",
                    "07 Tue",
                    "08 Wed",
                    "09 Thu",
                    "10 Fri",
                    "11 Sat",
                  ]}
                  border={false}
                >
                  {schedule}
                </Table>
              </Card>
            </div>
          )}
        </>
      )}
      <div className="flex justify-between items-center">
        <DropDown items={[10, 20, 30]} />
        <div className="w-1/4">
          <Pagination items={50} showItems={10} />
        </div>
      </div>
    </div>
  );
};

export default Staff;
