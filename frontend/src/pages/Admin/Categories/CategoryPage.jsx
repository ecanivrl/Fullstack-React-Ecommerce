import { Button, Popconfirm, Space, Table, message } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryPage = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCategories = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/categories`);

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

  const deleteCategory = async (categoryId) => {
    try {
      const response = await fetch(`${apiUrl}/api/categories/${categoryId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        message.success('Kategori başarıyla silindi.');
        getCategories();
      } else {
        message.error('Silme işlemi başarısız.');
      }
    } catch (error) {
      console.log('Silme hatası:', error);
    }
  };

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const columns = [
    {
      title: 'Kategori Görseli',
      dataIndex: 'img',
      key: 'img',
      render: (imgSrc) => (
        <img
          src={imgSrc}
          alt="imgSrc"
          style={{
            borderRadius: '100%',
            width: '100px',
            height: '100px',
            border: '1px solid rgba(155, 25, 25, 0.5)',
          }}
        />
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <b>{text}</b>,
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button
            type="primary"
            success
            onClick={() => navigate(`/admin/categories/update/${record._id}`)}
          >
            Update
          </Button>
          <Popconfirm
            title="Kategoriyi Sil"
            description="Kategoriyi silmek istediğinizden emin misiniz?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => deleteCategory(record._id)}
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    //   <div>AdminUserPage</div>
    <Table dataSource={dataSource} columns={columns} loading={loading} />
  );
};

export default CategoryPage;
