import { useState } from "react";
import { Plus, Edit, Trash, Save, XCircle } from "lucide-react";

const Home = () => {
  const [students, setStudents] = useState([
    { id: 1, nama: "Ajang Irhas Rifai", generation: 21 },
    { id: 2, nama: "Aditia Nurrahman", generation: 21 },
    { id: 3, nama: "Susi Haryati Hutasuhut", generation: 21 },
    { id: 4, nama: "Aisyah Romaito Siregar", generation: 21 },
    { id: 5, nama: "Ragil Sadewa Pasaribu", generation: 21 },
  ]);

  const [name, setName] = useState("");
  const [generation, setGeneration] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAdd = () => {
    const newStudent = {
      id: students.length + 1,
      nama: name,
      generation: parseInt(generation),
    };
    setStudents([...students, newStudent]);
    setName("");
    setGeneration("");
    setShowAddForm(false);
  };

  const handleEdit = (id) => {
    const student = students.find((student) => student.id === id);
    setName(student.nama);
    setGeneration(student.generation);
    setEditingId(id);
  };

  const handleSaveEdit = () => {
    const editedStudents = students.map((student) =>
      student.id === editingId
        ? { ...student, nama: name, generation: parseInt(generation) }
        : student
    );
    setStudents(editedStudents);
    setName("");
    setGeneration("");
    setEditingId(null);
  };

  const handleCancelEdit = () => {
    setName("");
    setGeneration("");
    setEditingId(null);
  };

  const handleDelete = (id) => {
    const filteredStudents = students.filter((student) => student.id !== id);
    setStudents(filteredStudents);
  };

  return (
    <div
      className="min-h-screen p-6"
      style={{
        backgroundImage: `url(./daun.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-green-50 bg-opacity-75 rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-green-700 text-center">List of My Friends</h1>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="mb-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2 transform transition-transform duration-300 hover:scale-105"
        >
          <Plus className="w-5 h-5" />
          <span>Add Friend</span>
        </button>

        {showAddForm && (
          <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg w-full md:w-1/2"
              />
              <input
                type="text"
                placeholder="Generation"
                value={generation}
                onChange={(e) => setGeneration(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg w-full md:w-1/2"
              />
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2 transform transition-transform duration-300 hover:scale-105"
                onClick={handleAdd}
              >
                <Plus className="w-5 h-5" /> <span>Submit</span>
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 flex items-center space-x-2 transform transition-transform duration-300 hover:scale-105"
                onClick={() => setShowAddForm(false)}
              >
                <XCircle className="w-5 h-5" /> <span>Cancel</span>
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {students.map((student) => (
            <div key={student.id} className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
              <div className="flex justify-between items-center mb-2">
                {editingId === student.id ? (
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 p-2 rounded-lg w-full"
                  />
                ) : (
                  <h2 className="text-xl font-bold">{student.nama}</h2>
                )}
                <div className="flex space-x-2">
                  {editingId === student.id ? (
                    <>
                      <button
                        className="text-blue-500 hover:text-blue-700"
                        onClick={handleSaveEdit}
                      >
                        <Save className="w-5 h-5" />
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={handleCancelEdit}
                      >
                        <XCircle className="w-5 h-5" />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="text-blue-500 hover:text-blue-700"
                        onClick={() => handleEdit(student.id)}
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDelete(student.id)}
                      >
                        <Trash className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>
              </div>
              <div>
                {editingId === student.id ? (
                  <input
                    type="text"
                    value={generation}
                    onChange={(e) => setGeneration(e.target.value)}
                    className="border border-gray-300 p-2 rounded-lg w-full"
                  />
                ) : (
                  <p className="text-gray-700">Generation: {student.generation}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
