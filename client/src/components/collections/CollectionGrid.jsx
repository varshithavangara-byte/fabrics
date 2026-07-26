import React, { useState } from 'react';
import { collections } from '../../data/collections';
import CategoryCard from './CategoryCard';
import { FaSearch, FaFilter } from 'react-icons/fa';

const CollectionGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');

  const allTags = ['all', 'silk', 'handloom', 'wedding', 'lehenga', 'blouse', 'rental', 'custom'];

  const filteredCollections = collections.filter((cat) => {
    const matchesSearch =
      cat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag =
      selectedTag === 'all' || cat.tags.some((t) => t.toLowerCase().includes(selectedTag));
    return matchesSearch && matchesTag;
  });

  return (
    <div>
      {/* Search & Filter Toolbar */}
      <div
        style={{
          background: '#FFF',
          padding: '24px',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '40px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          alignItems: 'center',
          justifyContent: 'space-between',
          border: '1px solid var(--border-light)',
        }}
      >
        {/* Search Input */}
        <div style={{ position: 'relative', minWidth: '280px', flex: 1 }}>
          <FaSearch style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search categories (e.g., Silk, Lehenga, Blouse)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px 12px 46px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-light)',
              outline: 'none',
              fontSize: '0.95rem',
            }}
          />
        </div>

        {/* Filter Badges */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px', marginRight: '6px' }}>
            <FaFilter color="var(--primary)" /> Filter:
          </span>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              style={{
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: 600,
                textTransform: 'capitalize',
                background: selectedTag === tag ? 'var(--primary)' : 'var(--bg-main)',
                color: selectedTag === tag ? 'var(--secondary)' : 'var(--text-dark)',
                border: selectedTag === tag ? '1px solid var(--secondary)' : '1px solid var(--border-light)',
                transition: 'var(--transition)',
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Display */}
      {filteredCollections.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
          <h3>No categories found matching "{searchTerm}"</h3>
          <p style={{ marginTop: '8px' }}>Try searching for sarees, silk, lehenga, or rental.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
          {filteredCollections.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CollectionGrid;
