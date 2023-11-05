import { Button, Popconfirm, Table, message } from 'antd';
import { useCallback, useEffect, useState } from 'react';

const AdminUserPage = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/users`);

      if (response.ok) {
        const data = await response.json();
        setDataSource(data);
      } else {
        message.error('veri getirme başarısız');
      }
    } catch (error) {
      console.error('veri hatası', error);
    } finally {
      setLoading(false);
    }
  }, [apiUrl]);

  const deleteUser = async (userEmail) => {
    try {
      const response = await fetch(`${apiUrl}/api/users/${userEmail}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        message.success('Kullanıcı başarıyla silindi.');
        getUsers();
      } else {
        message.error('Silme işlemi başarısız.');
      }
    } catch (error) {
      console.log('Silme hatası:', error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (imgSrc) => (
        <img
          src={imgSrc}
          alt="imgSrc"
          style={{
            borderRadius: '100%',
            width: '50px',
            height: '50px',
            border: '1px solid rgba(155, 25, 25, 0.5)',
          }}
        />
      ),
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },

    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (_, record) => (
        <Popconfirm
          title="Kullanıcıyı Sil"
          description="Kullanıcıyı silmek istediğinizden emin misiniz?"
          okText="Yes"
          cancelText="No"
          onConfirm={() => deleteUser(record.email)}
        >
          <Button type="primary" danger>
            Delete
          </Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    //   <div>AdminUserPage</div>
    <Table dataSource={dataSource} columns={columns} loading={loading} />
  );
};

export default AdminUserPage;
