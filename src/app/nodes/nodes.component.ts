import { Component, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Connection, Edge, Node, VflowComponent, VflowModule } from 'ngx-vflow';
import { DndDropEvent, DndModule } from 'ngx-drag-drop';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nodes',
  standalone: true,
  imports: [VflowModule, DndModule, FormsModule, CommonModule],
  templateUrl: './nodes.component.html',
  styleUrl: './nodes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NodesComponent {
  inputModalOpen = false;
  errorModalOpen = false;
  cardName: string = '';
  draggedCardName: any;
  savedEvent: any;  
  
  @ViewChild(VflowComponent)
  public vflow!: VflowComponent

  selectedNode: any
  
  public nodes: Node[] = [
    {
      id: '1',
      point: { x: 100, y: 300 }, 
      type: 'html-template',
      data: {
        type: 'client',
        text: 'Client Payments'
      }
    },
    {
      id: '2',
      point: { x: 500, y: 300 }, 
      type: 'html-template',
      data: {
        type: 'project',
        text: 'Project Sales'
      }
    },
    {
      id: '3',
      point: { x: 900, y: 200 }, 
      type: 'html-template',
      data: {
        type: 'payment',
        text: 'Project Payments'
      }
    },
    {
      id: '4',
      point: { x: 1400, y: 200 }, 
      type: 'html-template',
      data: {
        type: 'employee',
        text: 'Employee Salaries'
      }
    },
    {
      id: '5',
      point: { x: 500, y: 100 }, 
      type: 'html-template',
      data: {
        type: 'expense',
        text: 'Infrastructure Expenses'
      }
    },
    {
      id: '6',
      point: { x: 900, y: 100 }, 
      type: 'html-template',
      data: {
        type: 'department',
        text: 'Department Profit'
      }
    },
    {
      id: '7',
      point: { x: 1400, y: 100 }, 
      type: 'html-template',
      data: {
        type: 'report',
        text: 'Monthly Report'
      }
    }
  ];
  
  public edges: Edge[] = [
    {
      id: '1 -> 3',
      source: '1',
      target: '3',
      markers: {
        end: { type: 'arrow-closed' }
      }
    },
    {
      id: '2 -> 3',
      source: '2',
      target: '3',
      markers: {
        end: { type: 'arrow-closed' }
      }
    },
    {
      id: '3 -> 4',
      source: '3',
      target: '4',
      markers: {
        end: { type: 'arrow-closed' }
      }
    },
    {
      id: '3 -> 5',
      source: '3',
      target: '5',
      markers: {
        end: { type: 'arrow-closed' }
      }
    },
    {
      id: '5 -> 6',
      source: '5',
      target: '6',
      markers: {
        end: { type: 'arrow-closed' }
      }
    },
    {
      id: '6 -> 7',
      source: '6',
      target: '7',
      markers: {
        end: { type: 'arrow-closed' }
      }
    }
  ];
  
  drawer: any;

  submitForm() {
    if (this.cardName.trim() === '') {
      this.errorModal() // Show error modal if the name is empty
      this.closeModal();
      return; // Prevent execution if cardName is not provided
    }
    console.log('Card Name:', this.cardName);

    // Create the node after the modal has been submitted
    const point = this.vflow.documentPointToFlowPoint({
      x: this.savedEvent.x,
      y: this.savedEvent.y
    });

    // Add the new card with the correct name
    this.nodes = [
      ...this.nodes,
      {
        id: crypto.randomUUID(),
        point,
        type: 'html-template',
        data: {
          type: this.draggedCardName.toLowerCase(),
          text: this.cardName
        }
      }
    ];

    this.closeModal(); // Close modal after creating the card
  }

  // Open the Input modal
  openModal() {
    this.inputModalOpen = !this.errorModalOpen;
  }

  // Close the Input modal
  closeModal() {
    this.inputModalOpen = false;
  }
  errorModal() {
    this.errorModalOpen = !this.errorModalOpen;
  }



  // Method to handle connection between nodes
  connectionSetting(connection: Connection) {
    this.edges = [
      ...this.edges,
      {
        id: `${connection.source} -> ${connection.target}`,
        ...connection,
        markers: {
          end: {
            type: 'arrow'
          }
        }
      },
    ];
  }

  // Called when a node is clicked
  clickedNode(data: any) {
    this.selectedNode = data;
  }

  // Modified method to open the modal and save the event details
  createNode({ event }: DndDropEvent | any) {
    this.savedEvent = event; // Save event details to use after modal is closed
    this.inputModalOpen = true; // Open modal for user input
    console.log("Dragged Card Name:", this.draggedCardName);
  }

  // Method to handle the start of a drag action
  onDrag($event: DragEvent | any) {
    this.draggedCardName = $event.target["innerText"]; 
  }

   deleteNode(nodeId: string) {
    // Filter the selected node 
    this.nodes = this.nodes.filter(node => node.id !== nodeId);
  
    // Remove edges 
    this.edges = this.edges.filter(edge => edge.source !== nodeId && edge.target !== nodeId);
  }
}
